class CreatePractices < ActiveRecord::Migration[5.0]
  def change
    create_table :practices do |t|
      t.string :hash
      t.string :title

      t.timestamps
    end
  end
end
