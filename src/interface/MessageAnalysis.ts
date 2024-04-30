interface MessageAnalysis {
	offensive: Offensive // Information about the use of offensive language in the conversation
	concordance: Concordance // Information about the level of concordance between the messages in the conversation
	topics: string[] // The topics discussed in the conversation
	message: string // Explaination of the message if it is offensive or off-topic
}
