class ReposController < ApplicationController
  respond_to :json

  def initialize
    @repos = Github.repos.list user: 'RyanDur'
  end

  def index
    respond_with @repos
  end

  def show
    @repo = @repos.select{|repo| repo.id == params[:id].to_i}.pop
    respond_with Github.repos.commits.all @repo.owner.login, @repo.name
  end
end
