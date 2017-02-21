class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.date :date
      t.string :playerWhite
      t.integer :eloWhite
      t.string :playerBlack
      t.integer :eloBlack
      t.string :timeControl
      t.string :openingName
      t.string :ecoCode
      t.integer :gameLength
      t.float :result

      t.timestamps
    end
  end
end
