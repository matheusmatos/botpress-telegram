module.exports = (bp, telegram) => {

  const preprocessEvent = payload => {
    const userId = payload.sender.id
    const mid = payload.message && payload.message.mid

    if (mid && !messagesCache.has(mid)) {
      // We already processed this message
      payload.alreadyProcessed = true
    } else {
      // Mark it as processed
      messagesCache.set(mid, true)
    }

    return users.getOrFetchUserProfile(userId)
  }

  telegram.on('message', e => {
    preprocessEvent(e)
    .then(profile => {
      // push the message to the incoming middleware
      bp.middlewares.sendIncoming({
        platform: 'telegram',
        type: 'message',
        user: profile,
        text: e.message.text,
        raw: e
      })
    })
  })

  telegram.on('text', () => {
    bp.logger.warn('[telegram] text not implemented. Your pull requests are welcome :)')
  })

  telegram.on('audio', () => {
    bp.logger.warn('[telegram] audio not implemented. Your pull requests are welcome :)')
  })

  telegram.on('document', () => {
    bp.logger.warn('[telegram] document not implemented. Your pull requests are welcome :)')
  })

  telegram.on('photo', () => {
    bp.logger.warn('[telegram] photo not implemented. Your pull requests are welcome :)')
  })

  telegram.on('sticker', () => {
    bp.logger.warn('[telegram] sticker not implemented. Your pull requests are welcome :)')
  })

  telegram.on('video', () => {
    bp.logger.warn('[telegram] video not implemented. Your pull requests are welcome :)')
  })

  telegram.on('voice', () => {
    bp.logger.warn('[telegram] voice not implemented. Your pull requests are welcome :)')
  })

  telegram.on('contact', () => {
    bp.logger.warn('[telegram] contact not implemented. Your pull requests are welcome :)')
  })

  telegram.on('location', () => {
    bp.logger.warn('[telegram] location not implemented. Your pull requests are welcome :)')
  })

  telegram.on('new_chat_participant', () => {
    bp.logger.warn('[telegram] new_chat_participant not implemented. Your pull requests are welcome :)')
  })

  telegram.on('left_chat_participant', () => {
    bp.logger.warn('[telegram] left_chat_participant not implemented. Your pull requests are welcome :)')
  })

  telegram.on('new_chat_title', () => {
    bp.logger.warn('[telegram] new_chat_title not implemented. Your pull requests are welcome :)')
  })

  telegram.on('new_chat_photo', () => {
    bp.logger.warn('[telegram] new_chat_photo not implemented. Your pull requests are welcome :)')
  })

  telegram.on('delete_chat_photo', () => {
    bp.logger.warn('[telegram] delete_chat_photo not implemented. Your pull requests are welcome :)')
  })

  telegram.on('group_chat_created', () => {
    bp.logger.warn('[telegram] group_chat_created not implemented. Your pull requests are welcome :)')
  })

}