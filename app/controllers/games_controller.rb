class GamesController < ApplicationController

  def index
    @games_props = Game.all
  end

  def new
  end

  def create
    render plain: params[:games].inspect
  end
end
