get '/' do
	gmail = Gmail.new('stevenwono@gmail.com', 'strugglebus')
	@inbox = gmail.inbox.emails.reverse
  erb :index
end



# Gets display name
# <a class="sender" href="#"><%= message.raw_message.header.fields[4].address_list.addresses[0].display_name %></a>