class CreateTopic < ActiveRecord::Migration
  def change
    create_table :topics do |t|
      t.string :name
      t.datetime :recorded_date

      t.timestamps null: false
    end
  end
end
