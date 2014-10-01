class User < ActiveRecord::Base
  has_many :sent_messages
  has_many :received_messages
end
