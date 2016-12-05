class AddKeywordsToDatum < ActiveRecord::Migration
  def change
    add_column :data, :keywords, :string
  end
end
