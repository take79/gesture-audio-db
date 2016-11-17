class CreateActor < ActiveRecord::Migration
  def change
    create_table :actors do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.integer :datum_id

      t.timestamps null: false
    end
  end
end
