import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('../data/sample_transactions.csv')
data['amount'].plot(kind='bar')
plt.savefig('visualization.png')
plt.show()