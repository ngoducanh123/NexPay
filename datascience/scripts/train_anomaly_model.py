import pandas as pd
from sklearn.ensemble import IsolationForest
import joblib

data = pd.read_csv('../data/sample_transactions.csv')
X = data[['amount']]

model = IsolationForest(contamination=0.1)
model.fit(X)

joblib.dump(model, '../models/anomaly_model.pkl')
print('Model trained')