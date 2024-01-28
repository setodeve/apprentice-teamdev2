
User.create([
  { email: "user1@example.com", password: "password123", name: "Alice", profile: "User 1 profile", gender: 1, age: 25, img: "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4" },
  { email: "user2@example.com", password: "password456", name: "Bob", profile: "User 2 profile", gender: 2, age: 30, img: "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU" }
])

Otyakai.create([
  { name: "Otyakai Event 1", detail: "This is the first event", date: Date.today, place: "Tokyo", img: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU", host_id: 1, max_participants: 10 },
  { name: "Otyakai Event 2", detail: "This is the second event", date: Date.tomorrow, place: "Osaka", img: "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ", host_id: 2, max_participants: 15 }
])

Participant.create([
  { participant_id: 1, otyakai_id: 1 },
  { participant_id: 2, otyakai_id: 1 },
  { participant_id: 1, otyakai_id: 2 }
])