import pandas as pd
import numpy as np 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import BernoulliNB

data = pd.read_json(r"Sarcasm.json",lines = True)

data["is_sarcastic"] = data["is_sarcastic"].map({0:"Not_Sarcasm",1:"Sarcasm"})


data = data[["headline","is_sarcastic"]]
x = np.array(data["headline"])
y = np.array(data["is_sarcastic"])

cv = CountVectorizer()
#to fit data using cv as numerics
X = cv.fit_transform(x)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42)

model = BernoulliNB()
model.fit(X_train, y_train)
print(model.score(X_test,y_test))

def Predict(user):
    data = cv.transform([user]).toarray()
    output = model.predict(data)
    print(output[0], type(output[0]))
    return str(output[0])