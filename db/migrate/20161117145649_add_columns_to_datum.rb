class AddColumnsToDatum < ActiveRecord::Migration
  def change
    add_column :data, :actor_id, :integer
    add_column :data, :topic_id, :integer
    add_column :data, :gesture_tag_id, :integer
  end
end
