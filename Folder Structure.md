        nexpay/
        ├── README.md
        ├── LICENSE
        ├── .gitignore
        ├── frontend/
        │   ├── public/
        │   │   ├── index.html
        │   │   └── favicon.ico
        │   ├── src/
        │   │   ├── components/
        │   │   │   ├── PaymentForm.js
        │   │   │   ├── MerchantDashboard.js
        │   │   │   ├── OneClickPayment.js
        │   │   │   └── VisualizationChart.js
        │   │   ├── pages/
        │   │   │   ├── Home.js
        │   │   │   └── Merchant.js
        │   │   ├── services/
        │   │   │   └── api.js
        │   │   ├── App.js
        │   │   ├── index.js
        │   │   └── styles.css
        │   ├── .env.sample
        │   ├── package.json
        │   └── README.md
        ├── backend/
        │   ├── src/
        │   │   ├── controllers/
        │   │   │   ├── paymentController.js
        │   │   │   ├── authController.js
        │   │   │   └── merchantController.js
        │   │   ├── models/
        │   │   │   ├── Transaction.js
        │   │   │   └── Merchant.js
        │   │   ├── routes/
        │   │   │   ├── payments.js
        │   │   │   ├── auth.js
        │   │   │   └── merchants.js
        │   │   ├── utils/
        │   │   │   └── fpUtils.js
        │   │   ├── config/
        │   │   │   └── db.js
        │   │   ├── server.js
        │   │   └── graphql/
        │   │       └── schema.js
        │   ├── tests/
        │   │   └── payment.test.js
        │   ├── .env.sample
        │   ├── package.json
        │   └── README.md
        ├── datascience/
        │   ├── data/
        │   │   └── sample_transactions.csv
        │   ├── models/
        │   │   └── anomaly_model.pkl
        │   ├── scripts/
        │   │   ├── train_anomaly_model.py
        │   │   ├── detect_anomalies.py
        │   │   ├── route_traffic.py
        │   │   └── visualize_data.py
        │   ├── notebooks/
        │   │   └── exploration.ipynb
        │   ├── requirements.txt
        │   └── README.md
        ├── infrastructure/
        │   ├── docker/
        │   │   ├── Dockerfile.frontend
        │   │   ├── Dockerfile.backend
        │   │   ├── Dockerfile.datascience
        │   │   └── Dockerfile.mongo
        │   ├── scripts/
        │   │   ├── deploy.sh
        │   │   ├── monitor.sh
        │   │   └── self_heal.py
        │   ├── docker-compose.yml
        │   ├── .env.sample
        │   └── README.md
        └── docs/
            ├── architecture.md
            └── api_docs.md