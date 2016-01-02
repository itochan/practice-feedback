class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.references :practice, index: true, foreign_key: true
      t.integer :playback_time
      t.string :text

      t.timestamps
    end
  end
end
