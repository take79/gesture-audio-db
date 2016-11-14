class GestureTagsController < ApplicationController
  before_action :set_gesture_tag, only: [:show, :edit, :update, :destroy]

  # GET /gesture_tags
  # GET /gesture_tags.json
  def index
    @gesture_tags = GestureTag.all
  end

  # GET /gesture_tags/1
  # GET /gesture_tags/1.json
  def show
  end

  # GET /gesture_tags/new
  def new
    @gesture_tag = GestureTag.new
  end

  # GET /gesture_tags/1/edit
  def edit
  end

  # POST /gesture_tags
  # POST /gesture_tags.json
  def create
    @gesture_tag = GestureTag.new(gesture_tag_params)

    respond_to do |format|
      if @gesture_tag.save
        format.html { redirect_to @gesture_tag, notice: 'Gesture tag was successfully created.' }
        format.json { render :show, status: :created, location: @gesture_tag }
      else
        format.html { render :new }
        format.json { render json: @gesture_tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /gesture_tags/1
  # PATCH/PUT /gesture_tags/1.json
  def update
    respond_to do |format|
      if @gesture_tag.update(gesture_tag_params)
        format.html { redirect_to @gesture_tag, notice: 'Gesture tag was successfully updated.' }
        format.json { render :show, status: :ok, location: @gesture_tag }
      else
        format.html { render :edit }
        format.json { render json: @gesture_tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /gesture_tags/1
  # DELETE /gesture_tags/1.json
  def destroy
    @gesture_tag.destroy
    respond_to do |format|
      format.html { redirect_to gesture_tags_url, notice: 'Gesture tag was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gesture_tag
      @gesture_tag = GestureTag.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def gesture_tag_params
      params.fetch(:gesture_tag, {})
    end
end
