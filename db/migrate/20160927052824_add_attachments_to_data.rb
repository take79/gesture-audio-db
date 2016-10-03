class AddAttachmentsToData < ActiveRecord::Migration
  def self.up
    change_table :data do |t|
      t.attachment :audio
      t.attachment :video
      t.attachment :gesture
    end
  end

  def self.down
    remove_attachment :data, :audio
    remove_attachment :data, :video
    remove_attachment :data, :gesture
    drop_attached_file :posts, :video, :gesture
  end
end
