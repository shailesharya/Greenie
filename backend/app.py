from flask import Flask, request, jsonify

from flask_cors import CORS


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def index():
    return "Flask Server Running"

@app.route('/account/register', methods=['POST'])
def register_account():
    if request.method == "POST":
        data = request.get_json()

        # Dummy user registration logic
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({'error': 'Username and password are required'}), 400

        # In a real-world scenario, you would save the user data to a database
        # For simplicity, we'll just return a success message
        return jsonify({'message': f'Account created successfully for user {username}'})


# Placeholder user data
users = [
    {"id": 1, "username": "john_doe", "email": "john@example.com", "phone": "123-456-7890", "creation_date": "2023-01-01"},
    {"id": 2, "username": "jane_smith", "email": "jane@example.com", "phone": "987-654-3210", "creation_date": "2023-01-02"},
    {"id": 3, "username": "alice_jones", "email": "alice@example.com", "phone": "555-123-4567", "creation_date": "2023-01-03"},
    {"id": 4, "username": "bob_anderson", "email": "bob@example.com", "phone": "444-987-6543", "creation_date": "2023-01-04"},
    {"id": 5, "username": "emily_wilson", "email": "emily@example.com", "phone": "777-321-6540", "creation_date": "2023-01-05"},
    {"id": 6, "username": "david_brown", "email": "david@example.com", "phone": "666-789-0123", "creation_date": "2023-01-06"}
    # Add more user data as needed
]

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)


if __name__ == '__main__':
    app.run(debug=True)
