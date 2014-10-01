class CreateSentMessages < ActiveRecord::Migration
  def change
  	  	create_table :sent_messages do |t|
  		t.string :subject
  		t.string :message
  		t.timestamps
  	end
  end
end
