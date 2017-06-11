AGLIO=./node_modules/.bin/aglio
AGLIO_OPTS=
#--theme-variables slate --theme-template triple

RM=rm -f

MARKDOWNS=api_mock.md
HTMLS=$(MARKDOWNS:%.md=%.html)

.PHONY: all 

all:
	@for markdown in $(MARKDOWNS);\
	do \
		for html in $(HTMLS);\
		do \
			$(AGLIO) -i $$markdown -o $$html $(AGLIO_OPTS); \
		done \
	done

clean:
	@for html in $(HTMLS);\
	do \
		$(RM) $$html; \
	done
