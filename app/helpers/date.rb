def date(message)
	date = message.date.split(' ')
	date[0..3].join(' ')
end
