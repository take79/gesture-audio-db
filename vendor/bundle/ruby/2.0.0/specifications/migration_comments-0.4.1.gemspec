# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "migration_comments"
  s.version = "0.4.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Pinny"]
  s.date = "2016-05-31"
  s.description = "Add schema comments in your migrations, see them in model annotations and db/schema.rb dump"
  s.email = ["pinny@mwitz.com"]
  s.homepage = "https://github.com/pinnymz/migration_comments"
  s.require_paths = ["lib"]
  s.rubyforge_project = "migration_comments"
  s.rubygems_version = "2.0.14.1"
  s.summary = "Comments for your migrations"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activerecord>, [">= 4.2.0"])
      s.add_development_dependency(%q<annotate>, ["~> 2.7.0"])
      s.add_development_dependency(%q<pg>, [">= 0"])
      s.add_development_dependency(%q<mysql2>, [">= 0"])
      s.add_development_dependency(%q<sqlite3>, [">= 0"])
      s.add_development_dependency(%q<minitest-byebug>, [">= 0"])
    else
      s.add_dependency(%q<activerecord>, [">= 4.2.0"])
      s.add_dependency(%q<annotate>, ["~> 2.7.0"])
      s.add_dependency(%q<pg>, [">= 0"])
      s.add_dependency(%q<mysql2>, [">= 0"])
      s.add_dependency(%q<sqlite3>, [">= 0"])
      s.add_dependency(%q<minitest-byebug>, [">= 0"])
    end
  else
    s.add_dependency(%q<activerecord>, [">= 4.2.0"])
    s.add_dependency(%q<annotate>, ["~> 2.7.0"])
    s.add_dependency(%q<pg>, [">= 0"])
    s.add_dependency(%q<mysql2>, [">= 0"])
    s.add_dependency(%q<sqlite3>, [">= 0"])
    s.add_dependency(%q<minitest-byebug>, [">= 0"])
  end
end
