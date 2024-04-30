interface Concordance {
	level: number // The level of concordance between the messages in the conversation (0-1)
	userOutConcordance: string[] // The user(s) who sent messages that were off-topic or unrelated to the conversation
}