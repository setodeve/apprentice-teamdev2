users = [
  { email: "tanaka@example.com", password: "password", name: "田中一郎", profile: "東京に住むエンジニアです。趣味は読書と映画鑑賞です。", gender: 1, age: 30, img: "https://picsum.photos/200/300?random=1" },
  { email: "suzuki@example.com", password: "password", name: "鈴木花子", profile: "大阪出身のフリーランサー。写真撮影が趣味です。", gender: 2, age: 28, img: "https://picsum.photos/200/300?random=2" },
  { email: "sato@example.com", password: "password", name: "佐藤健太", profile: "北海道でカフェを経営しています。週末はサーフィンを楽しんでいます。", gender: 1, age: 35, img: "https://picsum.photos/200/300?random=3" },
]

users.each do |user|
  User.create!(user)
end


additional_otyakais = [
  { name: "JavaScriptフロントエンド開発", detail: "最新のフレームワークを使用して、効率的なフロントエンド開発の技術を学びます。#JavaScript #フロントエンド", date: Time.now, place: "名古屋", img: "https://picsum.photos/700/200?random=4", host_id: User.first.id, max_participants: 15 },
  { name: "週末ハイキング", detail: "自然を愛する人たちと一緒に、美しい山々をハイキングします。健康と新鮮な空気を楽しみましょう！#ハイキング #自然", date: Time.now, place: "富士山", img: "https://picsum.photos/700/200?random=5", host_id: User.last.id, max_participants: 20 },
  { name: "Pythonデータサイエンス入門", detail: "Pythonを使用したデータ分析の基本から学び、実際のデータセットで手を動かしてみましょう。#Python #データサイエンス", date: Time.now, place: "オンライン", img: "https://picsum.photos/700/200?random=6", host_id: User.first.id, max_participants: 25 },
  { name: "クラフトビール交流会", detail: "さまざまな種類のクラフトビールを味わいながら、ビール愛好家と情報交換しましょう！#クラフトビール #交流会", date: Time.now, place: "札幌", img: "https://picsum.photos/700/200?random=7", host_id: User.last.id, max_participants: 30 },
  { name: "DIY家具作りワークショップ", detail: "基本的な工具を使用して、独自の家具を作成します。創造性を発揮しましょう！#DIY #家具作り", date: Time.now, place: "福岡", img: "https://picsum.photos/700/200?random=8", host_id: User.first.id, max_participants: 10 },
  { name: "プログラミング勉強会", detail: "初心者向けのプログラミング勉強会を開催します。一緒にコーディングスキルを向上させましょう。", date: Time.now, place: "東京", img: "https://picsum.photos/700/200?random=4", host_id: User.first.id, max_participants: 10 },
  { name: "朝活読書会", detail: "早朝に集まって、好きな本について語り合う読書会です。コーヒーを飲みながら楽しい時間を過ごしましょう。", date: Time.now, place: "大阪", img: "https://picsum.photos/700/200?random=5", host_id: User.second.id, max_participants: 8 },
  { name: "週末ハイキング", detail: "自然を愛するみんなで、週末にハイキングに出かけましょう。美しい景色を楽しみながら健康にも良い一日を。", date: Time.now, place: "北海道", img: "https://picsum.photos/700/200?random=6", host_id: User.third.id, max_participants: 15 }
]

additional_otyakais.each do |otyakai|
  Otyakai.create!(otyakai)
end

participants = [
  { user_id: User.first.id, otyakai_id: Otyakai.third.id },
  { user_id: User.second.id, otyakai_id: Otyakai.third.id },
  { user_id: User.third.id, otyakai_id: Otyakai.second.id },
  { user_id: User.second.id, otyakai_id: Otyakai.first.id }
]

participants.each do |participant|
  Participant.create!(participant)
end