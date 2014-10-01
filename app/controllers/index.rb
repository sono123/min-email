get '/' do
	gmail = Gmail.new('stevenwono@gmail.com', 'strugglebus')
	@inbox = gmail.inbox.emails
  erb :index
end