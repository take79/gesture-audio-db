# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161114061303) do

  create_table "actors", force: :cascade do |t|
    t.string   "name",       limit: 255
    t.string   "gender",     limit: 255
    t.integer  "age",        limit: 4
    t.integer  "datum_id",   limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "data", force: :cascade do |t|
    t.string   "name",                 limit: 255
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.string   "audio_file_name",      limit: 255
    t.string   "audio_content_type",   limit: 255
    t.integer  "audio_file_size",      limit: 4
    t.datetime "audio_updated_at"
    t.string   "video_file_name",      limit: 255
    t.string   "video_content_type",   limit: 255
    t.integer  "video_file_size",      limit: 4
    t.datetime "video_updated_at"
    t.string   "gesture_file_name",    limit: 255
    t.string   "gesture_content_type", limit: 255
    t.integer  "gesture_file_size",    limit: 4
    t.datetime "gesture_updated_at"
  end

  create_table "gesture_tags", force: :cascade do |t|
    t.integer "metaphoric", limit: 4
    t.integer "iconic",     limit: 4
    t.integer "deictic",    limit: 4
    t.integer "beat",       limit: 4
    t.integer "datum_id",   limit: 4
  end

  create_table "topics", force: :cascade do |t|
    t.string   "name",          limit: 255
    t.datetime "recorded_date"
    t.integer  "datum_id",      limit: 4
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

end
