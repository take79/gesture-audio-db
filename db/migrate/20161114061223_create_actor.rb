class CreateActor < ActiveRecord::Migration
  def change
    create_table :actors do |t|
      t.integer :gender
      t.integer :age

      t.timestamps null: false
    end
  end
end
