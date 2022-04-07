""" Import the app to main file """
from website import create_app


""" Calling the application and setting the condition for the app to be run"""
app = create_app()


if __name__ == '__main__':
    app.run(debug=True)