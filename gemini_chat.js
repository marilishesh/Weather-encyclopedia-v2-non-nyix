import os
import sys
from google import genai
from google.genai import types

def initialize_client(api_key: str):
    """Initializes the Google GenAI client with validation for AIza or AQ key formats."""
    api_key = api_key.strip()
    
    # Validate prefix based on modern Google API key standards (AIza... or AQ...)
    if api_key.startswith("AIza") or api_key.startswith("AQ."):
        return genai.Client(api_key=api_key)
    else:
        raise ValueError("Invalid API key format. Google Gemini keys must start with 'AIza' or 'AQ.'.")

def chat_loop(client):
    """Interactive chat session using Gemini 3.6 Flash."""
    model_id = "gemini-3.6-flash"
    
    # Starting a multi-turn chat session
    chat = client.chats.create(model=model_id)
    
    print(f"\n--- Connected to Google Gemini ({model_id}) ---")
    print("Type your message below. Type 'exit' or 'quit' to close the menu.\n")
    
    while True:
        try:
            user_input = input("You: ").strip()
            if user_input.lower() in ["exit", "quit"]:
                print("Exiting chat session. Goodbye!")
                break
            if not user_input:
                continue
                
            response = chat.send_message(user_input)
            print(f"\nGemini: {response.text}\n" + "-"*40)
            
        except Exception as e:
            print(f"\n[Error]: {e}\n")

def main_menu():
    while True:
        print("\n========================================")
        print("      GOOGLE GEMINI API MANAGER         ")
        print("      Model: Gemini 3.6 Flash           ")
        print("========================================")
        print("1. Enter API Key & Start Chat Session")
        print("2. Exit")
        
        choice = input("\nSelect an option (1-2): ").strip()
        
        if choice == "1":
            print("\nSupported key formats: Standard ('AIza...') or Auth ('AQ....')")
            api_key_input = input("Enter your Gemini API key: ")
            
            try:
                client = initialize_client(api_key_input)
                # Test the key quickly or jump straight into the chat loop
                chat_loop(client)
            except Exception as e:
                print(f"\n[Authentication Error]: {e}")
                input("\nPress Enter to return to the main menu...")
                
        elif choice == "2":
            print("\nShutting down. Have a great day!")
            sys.exit(0)
        else:
            print("\n[Error]: Invalid selection. Please choose 1 or 2.")

if __name__ == "__main__":
    main_menu()
