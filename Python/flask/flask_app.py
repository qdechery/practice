from flask import Flask, render_template

from teachers import TEACHERS

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("teachers.html", teachers=TEACHERS)