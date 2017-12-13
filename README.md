## Steps for Setting mongodb
## In Terminal 1
sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db
mongod

## In Terminal 2
mongo
use users

## In Terminal 3
npm install --save
npm run dev


## In Terminal 4
node server