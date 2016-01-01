class RenameColumnHashToPractices < ActiveRecord::Migration[5.0]
  def change
    rename_column :practices, :hash, :access_hash
  end
end
