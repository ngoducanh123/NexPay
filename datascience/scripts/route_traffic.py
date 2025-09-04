# Simulate intelligent routing
def route_transaction(tx):
    if tx['amount'] > 1000:
        return 'high_value_dc'
    return 'standard_dc'

sample_tx = {'amount': 1500}
print(route_transaction(sample_tx))