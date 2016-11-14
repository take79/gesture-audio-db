class CreateGestureTags < ActiveRecord::Migration
  def change
    create_table :gesture_tags do |t|

      t.timestamps null: false
    end
  end
end
