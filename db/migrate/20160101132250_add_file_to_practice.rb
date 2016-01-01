class AddFileToPractice < ActiveRecord::Migration[5.0]
  def change
    add_column :practices, :file, :string
  end
end
