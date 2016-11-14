class CreateGestureTag < ActiveRecord::Migration
  def change
    create_table :gesture_tags do |t|
      t.integer :metaphoric
      t.integer :iconic
      t.integer :deictic
      t.integer :beat
    end
  end
end
