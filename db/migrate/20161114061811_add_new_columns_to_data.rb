class AddNewColumnsToData < ActiveRecord::Migration
  def change
    change_table :data do |t|
      t.integer :topic_id
      t.integer :actor_id
      t.integer :gesture_tag_id
    end
  end
end
