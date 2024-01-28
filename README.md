
## Docker関連

### git clone後、初回時コマンド
前提 :  Docker Desktopをたちあげていること
https://www.docker.com/products/docker-desktop/

``` sh
sudo docker-compose build --no-cache
sudo docker-compose up
sudo docker-compose exec backend rails db:create
sudo docker-compose exec backend rails db:migrate
sudo docker-compose exec backend rails db:seed
```

### 初回以外コマンド
前提 :  Docker Desktopをたちあげていること
``` sh
sudo docker-compose up
```

### コマンド解説 
```sh
# Dockerイメージを作成
sudo docker-compose build --no-cache

# Dockerイメージからコンテナ作成、立ち上げ
sudo docker-compose up

# backend/config/database.ymlの設定でデータベース作成
sudo docker-compose exec backend rails db:create

# マイグレーションファイルを適用
sudo docker-compose exec backend rails db:migrate

# seed.rbに書いてある内容に従いテストデータを生成する
sudo docker-compose exec backend rails db:seed

# テーブル再作成後、マイグレーションファイルを再適用
sudo docker-compose exec backend rails db:migrate:reset

# backendのDockerコンテナに入る
sudo docker-compose exec -it backend bash

# frontendのDockerコンテナに入る
sudo docker-compose exec -it frontend sh

# dbのDockerコンテナに入る
sudo docker-compose exec -it db bash

# 入っているコンテナを抜ける
exit
```

### mysql接続方法
前提 : sudo docker-compose up実行中に別ターミナルを開く
```sh
sudo docker-compose exec -it db bash
mysql
```

### 参考資料
* [DockerイメージとDockerコンテナの違い](https://www.kagoya.jp/howto/cloud/container/dockerimage/#:~:text=Docker%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8%E3%81%A8Docker%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E3%81%AE%E9%81%95%E3%81%84,-Docker%E3%82%92%E4%BD%BF%E3%81%84&text=%E5%89%8D%E9%A0%85%E3%81%A7%E8%BF%B0%E3%81%B9%E3%81%9F%E3%82%88%E3%81%86,%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E7%92%B0%E5%A2%83%E3%83%BB%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9%E3%81%A7%E3%81%99%E3%80%82)

* [docker-compose 'up' とか 'build' とか 'start' とかの違いを理解できていなかったのでまとめてみた](https://qiita.com/tegnike/items/bcdcee0320e11a928d46)


## ポート情報
| 対象 | ポート |
| ---- | ---- |
| backend(Rails) | 8080 |
| frontend(React) | 3000 |
| db(mysql) | 3306 |