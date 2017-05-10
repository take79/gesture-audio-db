class GenerationController < ApplicationController
  before_action :authenticate_user!

  def execute
    @data = Datum.all
    min = @data.first.id
    max = @data.last.id
    @datum = Datum.find([*min..max].sample)
  end

end
