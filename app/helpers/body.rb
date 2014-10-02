def msg_body(message)
	msg_array = []
	message_body = message.body.decoded
	message_body.split('\n').each do |line|
		msg_array << line
	end
	return msg_array
end



# <% msg_body = message.body.decoded %>
# <% msg_body.split('\n').each do |line| %>
# <p><%= line %></p>
# <br>
# <% end %>


# <p>
# <% message.body.decoded.split('\n').each do |x| %>
# <%= x %>
# <% end %>
# </p>
