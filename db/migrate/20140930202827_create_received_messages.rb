class CreateReceivedMessages < ActiveRecord::Migration
  def change
  	  	create_table :received_messages do |t|
  		t.string :subject
  		t.string :message
  		t.timestamps
  	end
  end
end
