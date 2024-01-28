# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_01_28_121051) do
  create_table "otyakais", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.text "detail"
    t.date "date"
    t.string "place"
    t.string "img"
    t.bigint "host_id"
    t.bigint "max_participants"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_otyakais_on_host_id"
  end

  create_table "participants", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "participant_id"
    t.bigint "otyakai_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["otyakai_id"], name: "index_participants_on_otyakai_id"
    t.index ["participant_id"], name: "index_participants_on_participant_id"
  end

  create_table "users", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "email", null: false
    t.string "password", null: false
    t.string "name", null: false
    t.text "profile"
    t.bigint "gender"
    t.bigint "age"
    t.string "img", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "otyakais", "users", column: "host_id"
  add_foreign_key "participants", "otyakais"
  add_foreign_key "participants", "users", column: "participant_id"
end
