import numpy as np
import pandas as pd

from pandas import Series, DataFrame

import webbrowser
website = 'http://en.wikipedia.org/wiki/NFL_win-loss_records'

# opens webpage
# webbrowser.open(website)

#copies from clipboard (so I copied the first 5 rows of the table in the webpage above)
nfl_frame = pd.read_clipboard()
print nfl_frame

#calls columns of the table
print nfl_frame.columns
print nfl_frame.Team
print nfl_frame['First']

print DataFrame(nfl_frame, columns=['Team','Pct.','Won'])