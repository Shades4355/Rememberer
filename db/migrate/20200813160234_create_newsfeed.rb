class CreateNewsfeed < ActiveRecord::Migration[6.0]
  def change
    create_table :newsfeeds do |t|
      t.string :story

      t.timestamps null: false
    end
  end
end
