import requests

BASE_URL = "http://localhost:3000/api"

def test_login_endpoint():
    response = requests.post(
        f"{BASE_URL}/auth/login",
        json={"email": "gafocoy789@dmener.com", "password": "password123"}
    )
    assert response.status_code == 200
    response_data = response.json()
    assert "message" in response_data and response_data["message"] == "Login Successful"
    assert "user" in response_data  