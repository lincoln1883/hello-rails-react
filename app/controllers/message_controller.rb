class MessageController < ApplicationController
  def index
    # controller index action
    @messages = Message.all
    @message = @messages.sample
  end
end
