import pandas as pd
import joblib

model = joblib.load('../models/anomaly_model.pkl')
data = pd.read_csv('../data/sample_transactions.csv')
X = data[['amount']]

predictions = model.predict(X)
print('Anomalies:', predictions)