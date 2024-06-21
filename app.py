from flask import Flask, request, jsonify, send_from_directory
import torch
from transformers import T5Tokenizer, T5ForConditionalGeneration

app = Flask(__name__, static_folder='chatbot')

# Load the tokenizer and model globally to avoid reloading multiple times
tokenizer = T5Tokenizer.from_pretrained('t5-small')
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = T5ForConditionalGeneration.from_pretrained('cssupport/t5-small-awesome-text-to-sql')
model = model.to(device)
model.eval()

def generate_sql(input_prompt):
    inputs = tokenizer(input_prompt, padding=True, truncation=True, return_tensors="pt").to(device)

    with torch.no_grad():
        outputs = model.generate(**inputs, max_length=512)
    
    generated_sql = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    return generated_sql

# Route to serve the index.html file
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

# API route to handle chat requests
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    query = data['message']
    
    # Generate the SQL query
    generated_sql = generate_sql(query)

    return jsonify({"response": generated_sql})

# Route to serve static files like CSS and JS
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True)
