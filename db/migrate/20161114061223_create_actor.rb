class CreateActor < ActiveRecord::Migration
  def change
    create_table :actors do |t|
      t.string :gender
      t.integer :age

      t.timestamps null: false
    end
  end
end
